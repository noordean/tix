class Event < ApplicationRecord
  belongs_to :user

  validates :name, :address, :starts_at, :ends_at, presence: true
end
