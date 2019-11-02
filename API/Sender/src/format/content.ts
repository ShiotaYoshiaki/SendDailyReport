function createTaskList(task: Array<string>) {
  let taskList: string = "";
  task.forEach((item: string, index: Number) => {
    if (index > 0) {
      taskList += `<br>`;
    }
    taskList += `・${item}`;
  });
  return taskList;
}

function createImpressions(impressions: string | null) {
  if(impressions === null) return null;
  return `本日の所感:
  ${impressions}`;
}

interface Param {
  date: string,
  startTime: string,
  endTime: string,
  company: string,
  name: string,
  todayTask: Array<string>,
  nextTask: Array<string>,
  impressions: string | null,
}

export default (param: Param) => {
  const {
    date,
    startTime,
    endTime,
    company,
    name,
    todayTask,
    nextTask,
    impressions,
  } = param;
  const content = `各位
  お疲れ様です。${company}の${name}です。
  本日の作業日報を提出致します。

  日付: ${date}
  作業時間: ${startTime} ~ ${endTime}

  本日の作業内容:
  ${createTaskList(todayTask)}

  翌営業日の作業内容:
  ${createTaskList(nextTask)}

  ${createImpressions(impressions)}

  以上です。よろしくお願いします。
  `;
  return content;
};
