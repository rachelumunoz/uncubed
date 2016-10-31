class API::V1::GalleriesController < ApplicationController
  def index
    @galleries = Gallery.all
    render json: @galleries, each_serializer: GallerySerializer
  end

  def create
    @gallery = Gallery.new(gallery_params)
    @gallery.submitted_by = current_user
    if @gallery.save
      render json: @gallery, each_serializer: GallerySerializer
    else
      #need error rendering
      render json: @gallery.errors, status: :unprocessable_entity
    end
  end

  private

  def gallery_params
      params.require(:gallery).permit(:name, :address, :tags, images_attributes: :image)
    end
end