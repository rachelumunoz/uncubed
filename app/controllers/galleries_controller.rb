 class GalleriesController < ApplicationController
  def index
    @galleries = Gallery.all
  end

  def new
    @gallery = Gallery.new
  end

  def create
    @gallery = Gallery.new(gallery_params)
    @gallery.save
    redirect_to root_path
  end

  private
    def gallery_params
      params.require(:gallery).permit(:name, :address)
    end
end
