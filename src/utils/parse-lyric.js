/**
 * 
 * @param {*} lyricSting 
 * [00:00.000] 作词 : 水原小樱
[00:01.000] 作曲 : 水原小樱
[00:21.182]曾经的合照
[00:23.930]总在我心间缠绕
[00:26.692]最后得不到
[00:28.933]最让人忘不了
[00:31.688]明月 挂在树梢
[00:34.689]夜色正好
[00:36.944]触不可及的
[00:39.931]为何总是刚刚好
[00:41.432]
[00:42.688]那时的心跳
[00:44.690]恨不得让你听到
[00:47.931]强烈的信号
[00:50.180]只让你感应到
[00:53.187]时光 来去悄悄
[00:55.931]不再喧闹
[00:58.190]激荡的波涛
[01:01.194]也不在梦里飘摇
[01:02.689]
[01:03.933]白月光在照耀
[01:06.187]才想起她的好
[01:09.189]朱砂痣久难消
[01:11.689]是否知道
[01:14.443]窗前的明月照
[01:16.931]独自一人远眺
[01:19.937]白月光是年少
[01:22.183]是她的笑
[01:24.194]
[01:25.696]那时的心跳
[01:27.650]恨不得让你听到
[01:30.646]强烈的信号
[01:32.659]只让你感应到
[01:35.897]时光 来去悄悄
[01:38.646]不再喧闹
[01:41.158]激荡的波涛
[01:43.407]也不在梦里飘摇
[01:45.649]
[01:46.405]白月光在照耀
[01:49.161]才想起她的好
[01:51.899]朱砂痣久难消
[01:54.159]是否知道
[01:57.409]窗前的明月照
[01:59.660]独自一人远眺
[02:02.661]白月光是年少
[02:04.656]是她的笑
 */
// [02:04.656]
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
export function parseLyric(lyricString) {
  const lineStings = lyricString.split('\n');
  const lyrics = [];
  for (let line of lineStings) {
    if (line) {
      // ["[00:26.692]", "00", "26", "692", index: 0, input: "[00:26.692]最后得不到", groups: undefined]
      const result = parseExp.exec(line);
      if (!result) continue;
      const time1 = result[1] * 60 * 1000;
      const time2 = result[2] * 1000;
      const time3 = result[3].length === 3 ? result[3] * 1 : result[3] * 10;
      const time = time1 + time2 + time3;
      const content = line.replace(parseExp, '').trim();
      const lineObj = { time, content };
      lyrics.push(lineObj);
    }
  }
  lyrics.push({ time: lyrics[lyrics.length - 1].time + 2000, content: '' });
  return lyrics;
}
