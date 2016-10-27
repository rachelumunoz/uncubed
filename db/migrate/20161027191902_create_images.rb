class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.references :gallery
      t.references :user

      t.timestamps
    end
  end
end
