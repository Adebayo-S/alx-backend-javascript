const getListStudentIds = (list) => {
  if (typeof list === 'object' && list instanceof Array) {
    return list.map((item) => item.id);
  }
  return [];
};

export default getListStudentIds;
