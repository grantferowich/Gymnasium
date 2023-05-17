/* # Create a simple backend implementation to power an excel-like spreadsheet.
#
# Example Spreadsheet - https://sheets.google.com
#
# Provided below is some starter code to get you headed in the right direction.
# Please extend or re-write this solution to satisfy the following requirements.
#  [x] store values in indivual cells
#  [ ] store references to other cells in the sheet
#      - example input: A3 references A1
#      - example output:
#        --------
#        A1: 1
#        B1: 100
#        A3: 1
#        --------
#  [Future] store the sum of a list of cells
#      - example output: Z9 is the sum of [A1, A3, B1]
#        --------
#        A1: 1
#        B1: 100
#        A3: 1
#        Z9: 102
#        --------
 */


class Sheet:

  def __init__(self) -> None:
    self.cells = dict()





sheet = Sheet()
sheet.set_value('A1', 1)
sheet.set_value('B1', 100)
