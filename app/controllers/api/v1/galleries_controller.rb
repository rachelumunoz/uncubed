class API::V1::GalleriesController < ApplicationController
  before_action :set_gallery, only: [:upvote, :downvote]

  def index
    @galleries = Gallery.all
    render json: @galleries, each_serializer: GallerySerializer
  end

  def create
    # byebug
    @gallery = Gallery.new(gallery_params)
    @gallery.submitted_by = current_user
    if @gallery.save
      render json: @gallery, each_serializer: GallerySerializer
    else
      #need error rendering
      render json: @gallery.errors, status: :unprocessable_entity
    end
  end

  def upvote
    @gallery.upvote_by current_user
    render json: @gallery, each_serializer: GallerySerializer
  end

  def downvote
    @gallery.downvote_by current_user
    render json: @gallery, each_serializer: GallerySerializer
  end

  private
    def gallery_params
      params.require(:gallery).permit(:name, :address, :tags,  { images: [] })
    end
    def set_gallery
      @gallery = Gallery.find(params[:id])
    end
end