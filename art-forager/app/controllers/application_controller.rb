class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods

  def encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end

  def decode(token)
    body = JWT.decode(token, Rails.application.secrets.secret_key_base)[0]
    HashWithIndifferentAccess.new body

  rescue nil

  end

  def current_organizer
    @current_organizer ||= find_current_organizer
  end

  def find_current_organizer
    authenticate_with_http_token do | token, options |
      data = decode(token)
      token && Organizer.find(data[:id])
    end
  end

  def ensure_signed_in
    return if current_organizer
    render nothing: true, status: 401
  end
end
