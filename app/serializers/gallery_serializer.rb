class GallerySerializer < ActiveModel::Serializer
  attributes :id, :name, :address

  has_many :votes do
    object.get_upvotes.count
  end
end
