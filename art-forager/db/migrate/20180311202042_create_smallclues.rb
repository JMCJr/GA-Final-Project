class CreateSmallclues < ActiveRecord::Migration[5.1]
  def change
    create_table :smallclues do |t|
      t.text :clue_text
      t.string :clue_answer
      t.string :clue_image_url
      t.string :clue_gallery
      t.string :forage_level

      t.timestamps
    end
    add_index :smallclues, :clue_text
    add_index :smallclues, :clue_answer
    add_index :smallclues, :clue_image_url
    add_index :smallclues, :clue_gallery
    add_index :smallclues, :forage_level
  end
end
