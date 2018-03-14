class OrganizersController < ApplicationController
  # def index
  #   organizer = Organizer.all
  #   render json: organizer
  # end
  #
  # def show
  #   organizer = Organizer.find(params[:id])
  #   render json: organizer
  # end
  #
  # def create
  #   organizer = Organizer.create!(organizer_params)
  #   render json: organizer
  # end
  #
  # def update
  #   organizer = Organizer.find(params[:id])
  #   organizer = Organizer.update!(organizer_params)
  # end
  #
  # def destroy
  #   organizer = Organizer.find(params[:id])
  #   organizer = destroy!
  #   render plain: "This Organizer Is No More"
  # end
  #
  # def forages_by_organizer
  #   organizer = Organizer.find(params[:id])
  #   render json: organizer.forages
  # end
  #
  # private
  #
  # def organizer_params
  #   params.require(:organizer).permit(:email, :password_digest, :organizer_id)
  # end

  def index
    puts 'called'
    session[:session_token] = 3
    organizer = Organizer.all
    render json: organizer
  end

  def gen_token(organizer_id)
    payload = {id: organizer_id}
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end

  def create
    email = params[:email]
    password = params[:password]
    puts 'called on create organizer'

    new_organizer = Organizer.new({
      email: email,
      password: password
    })


    if new_organizer.valid?
      new_organizer.save
      render json: {token: gen_token(new_organizer.id)}
    else
      render nothing: true, status 401
    end
  end

  # def index
  #   @users = User.all
  # end

  def is_logged_in
    if current_organizer
      render json: current_organizer
    else render nothing: true, status: 401
    end
  end

  def login
    organizer = params[:email]
    password = params[:password]

    organizer = Organizer.find_from_credentials organizer, password
    if organizer.nil?
      render json: { err: 'No User' }
    else
      render json: {organizer: organizer, token: gen_token(organizer.id)}
    end

  end

end
