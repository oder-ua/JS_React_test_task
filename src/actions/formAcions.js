export const DATA_SAVE = 'DATA:SAVE';

export function saveData(data){
  return {
    type: DATA_SAVE,
    dataload: {
      data,
    }
  }
}