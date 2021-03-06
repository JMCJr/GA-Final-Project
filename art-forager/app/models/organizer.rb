class Organizer < ApplicationRecord
  PASSWORD_LENGTH = (6..25)
  EMAIL_LENGTH = (5..15)

  validates_presence_of :email
  validates :email, length: EMAIL_LENGTH, uniqueness: true

  validates :password, length: PASSWORD_LENGTH, allow_nil: true

  has_many :forages

  attr_reader :password

  def self.find_from_credentials(email, password)
    organizer = find_by(email: email)
    return nil unless organizer
    organizer if organizer.is_password?(password)
  end

  def is_password?(password_attempt)
    BCrypt::Password.new(password_digest).is_password?(password_attempt)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

end
