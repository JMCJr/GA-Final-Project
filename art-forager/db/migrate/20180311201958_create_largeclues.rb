class CreateLargeclues < ActiveRecord::Migration[5.1]
  def change
    create_table :largeclues do |t|
      t.text :clue_text
      t.string :clue_answer
      t.string :clue_image_url
      t.string :clue_gallery
      t.string :forage_level

      t.timestamps
    end
    add_index :largeclues, :clue_text
    add_index :largeclues, :clue_answer
    add_index :largeclues, :clue_image_url
    add_index :largeclues, :clue_gallery
    add_index :largeclues, :forage_level
  end
end
