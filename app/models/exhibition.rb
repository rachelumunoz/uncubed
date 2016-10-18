class Exhibition < ApplicationRecord
  belongs_to :gallery
  acts_as_votable
end
