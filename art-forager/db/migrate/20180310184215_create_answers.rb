class CreateAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :answers do |t|
      t.string :answer
      t.string :correct
      t.bigint :forage_id
      t.timestamps
      t.belongs_to :forage, index: true
    end
    add_index :answers, :answer
    add_index :answers, :correct
  end
end
