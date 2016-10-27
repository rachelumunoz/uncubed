class API::V1::GalleriesController < ApplicationController
  def index
    @galleries = Gallery.all
    render json: @galleries
    #need to secure what is being sent
  end
end