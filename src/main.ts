import * as fs from 'fs/promises';
import { join } from 'path';
import { sliceSplitOrderWorkerNumber } from './sliceWorker';

// 파일 경로 설정 (절대 경로 사용)
const inputFilePath = join(__dirname, '../data/data.txt');
const outputFilePath = join(__dirname, '../data/result.txt');

// 파일 처리 및 결과 저장 함수
async function processFile() {
  try {
    // data.txt 파일 읽기
    const data = await fs.readFile(inputFilePath, 'utf-8');
    const lines = data
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean); // 줄별로 나누고 공백 제거

    // 각 줄을 함수로 처리
    const resultLines = lines.map((line) => sliceSplitOrderWorkerNumber(line));

    // 결과를 result.txt에 저장
    await fs.writeFile(outputFilePath, resultLines.join('\n'), 'utf-8');
    console.log(`Result saved to ${outputFilePath}`);
  } catch (error) {
    console.error(`Error processing file: ${error}`);
  }
}

// 스크립트 실행
processFile();
