class CreateExhibitions < ActiveRecord::Migration[5.0]
  def change
    create_table :exhibitions do |t|
      t.string :title
      t.string :artist
      t.references :gallery, foreign_key: true
      t.datetime :date_begin
      t.datetime :date_end
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
