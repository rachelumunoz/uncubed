class Gallery < ApplicationRecord
  validates :name, :address, presence: true
end
