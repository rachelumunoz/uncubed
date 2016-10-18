class CreateGalleries < ActiveRecord::Migration[5.0]
  def change
    create_table :galleries do |t|
      t.string :name
      t.string :address
      t.references :user
      
      t.timestamps
    end
  end
end
