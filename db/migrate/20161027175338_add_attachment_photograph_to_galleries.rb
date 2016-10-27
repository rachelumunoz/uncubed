class AddAttachmentPhotographToGalleries < ActiveRecord::Migration
  def self.up
    change_table :photographs do |t|
      t.attachment :photograph
    end
  end

  def self.down
    remove_attachment :photographs, :photograph
  end
end
