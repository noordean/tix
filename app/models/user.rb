class User < ApplicationRecord
  validates :google_id, uniqueness: true
end
