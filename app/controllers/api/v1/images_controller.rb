class API::V1::ImagesController < ApplicationController
  before_action :load_resource

  def create
    add_more_images(images_params[:images])
    # multiple gallery only saves if try to save, but then spits out error
    # flash[:error] = "Failed uploading images" unless @resource.save
  end
  

  private
  def load_resource
    resource, id = request.path.split('/')[3,4]
    @resource = resource.singularize.classify.constantize.find(id)
  end
  
  def params_name
    request.path.split('/')[3].singularize
  end

  def images_params
    params.require(params_name).permit(:images)
  end

  def add_more_images(new_images)
    images = @resource.images # copy the old images 
    images.push(new_images) # concat old images with new ones
    @resource.images = images # concat old images with new ones
    # byebug
  end
end
