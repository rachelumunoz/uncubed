class ImagesController < ApplicationController
  def create
    load_resource
  end
  private
  def load_resource
    puts "====================================================="
    puts request.path
  end
end
