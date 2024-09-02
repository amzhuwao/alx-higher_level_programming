class Square:
    def __init__(self, size=0, position=(0, 0)):
        # Private attributes
        if size <= 0:  
            raise ValueError("Size must be >= 0.")
        if not isinstance(position, tuple):
            raise TypeError("Position must be a tuple of two positive integers.")
        if len(position) != 2 or not all(i > 0 for i in position):
            raise TypeError("Position must be a tuple of two positive integers.")

        # Set instance attributes
        self.size = size
        self.position = position  


    def size(self):
      return self._size

    def _size(self, value):
        # Return the value
        if not isinstance(value, int):
            raise TypeError("Size must be an integer.") 
        if size < 0:
            raise ValueError("Size must be >= 0.") 

        self.size = value   

    def position(self):
      return self._position
 
    def _position(self, value):
      # Return the value
      if not isinstance(value, tuple):
          raise TypeError("Position must be a tuple of two positive integers.")
      if len(value) != 2 or not all(i > 0 for i in value):
          raise TypeError("Position must be a tuple of two positive integers.")

        self.position = value 


    def area(self):
      return self.size * self.size

    def my_print(self):
      # Print the square with the character #:
      if self.size == 0: 
          print("")  
      else:
          for i in range(self.size):
              for j in range(self.size):
                  if (i,j) == (self.position[0], self.position[1]):
                      print("#", end="")
                  else:
                      print(" ", end="") 