class User < ApplicationRecord
  has_many :events

  validates :google_id, uniqueness: true
end
