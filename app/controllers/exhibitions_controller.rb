class ExhibitionsController < ApplicationController
  before_action :set_gallery, only: [:new, :create]
  def new
    @exhibition = @gallery.exhibitions.new
  end

  def create
    @exhibition = @gallery.exhibitions.new(exhibition_params)
    if @exhibition.save
      redirect_to @gallery
    else
      flash.now[:alert] =  @exhibition.errors.full_messages
      render :new
    end
  end


  private
  def set_gallery
     @gallery = Gallery.find(params[:gallery_id])
  end

  def exhibition_params
    params.require(:exhibition).permit(:title, :artist, :date_begin, :date_end)
  end
end