class Forage < ApplicationRecord
  validates_presence_of :orgs_code
  validates :orgs_code, :uniqueness => true
  belongs_to :organizer
  has_many :answers
end
