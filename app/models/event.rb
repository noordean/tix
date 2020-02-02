class Event < ApplicationRecord
  belongs_to :user

  validates :name, :address, :starts_at, :ends_at, presence: true
  validate :starts_at_in_the_past
  validate :ends_at_in_the_past
  validate :ends_at_greater_than_starts_at

  enum status: {
    active:  1,
    in_active: 2
  }

  def starts_at_in_the_past
    errors.add(:starts_at, "must not be a date in the past") if starts_at.past?
  end

  def ends_at_in_the_past
    errors.add(:ends_at, "must not be a date in the past") if ends_at.past?
  end

  def ends_at_greater_than_starts_at
    errors.add(:ends_at, "must not be less than start date") if ends_at <= starts_at
  end
end
