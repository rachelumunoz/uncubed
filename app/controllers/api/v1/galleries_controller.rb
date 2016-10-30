class API::V1::GalleriesController < ApplicationController
  def index
    @galleries = Gallery.all
    render json: @galleries, each_serializer: GallerySerializer
  end

  def create
    @gallery = Gallery.new(params[:gallery])
    # @gallery.submitted_by = current_user
    if @gallery.save
      puts "=========it saved==============="
    else

    end
    puts params
  end

  private

  def gallery_params
    params.require(:gallery).permit(:name, :address, :image)
  end
end