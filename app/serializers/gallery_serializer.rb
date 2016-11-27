class GallerySerializer < ActiveModel::Serializer
  attributes :id, :name, :address

  has_many :votes do
    object.upvotes
  end

  has_many :images do
    object.images
  end
end
