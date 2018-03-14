class CreateMediumclues < ActiveRecord::Migration[5.1]
  def change
    create_table :mediumclues do |t|
      t.text :clue_text
      t.string :clue_answer
      t.string :clue_image_url
      t.string :clue_gallery
      t.string :forage_level

      t.timestamps
    end
    add_index :mediumclues, :clue_text
    add_index :mediumclues, :clue_answer
    add_index :mediumclues, :clue_image_url
    add_index :mediumclues, :clue_gallery
    add_index :mediumclues, :forage_level
  end
end
