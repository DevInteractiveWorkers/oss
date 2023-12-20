export const getCurrentDate = (): number[] => {
    const currentDate = new Date();
    const year = String(currentDate.getFullYear()).slice(-2); // Get the last two digits of the year.
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
  
    // Format the date in yy-mm-dd format:
    const formattedDate = [parseInt(day),parseInt(month),parseInt(year)];
  
    return formattedDate;
  
  };