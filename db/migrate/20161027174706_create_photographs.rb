class CreatePhotographs < ActiveRecord::Migration[5.0]
  def change
    create_table :photographs do |t|
      t.references :gallery
      t.timestamps
    end
  end
end
