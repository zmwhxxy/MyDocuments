const fs = require('fs');

// 读取并解析 TypeScript 文件
const inputFile = 'Data.ts';
const outputFile = 'Data_converted.ts';

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Failed to read input file:', err);
        return;
    }

    // 使用正则表达式将 position: v2(x, y) 替换为 position: { x: number, y: number }
    // const newData = data.replace(/position: v2\((\d+), (\d+)\)/g, 'position: { x: $1, y: $2 }');

	// 使用正则表达式将 position: { x: number, y: number } 转换为 position: v2(x, y)。
	// const newData = data.replace(/position: { x: (\d+), y: (\d+) }/g, 'position: v2($1, $2)');

	// 使用正则表达式将 position: { x: number, y: number } 转换为 position: v2(x, y)
	// size: { width: number, height: number } 转换为 size: size(x, y)

	
//	const newData = data.replace(/position:\s*\{\s*x:\s*([^\s,]+)\s*,\s*y:\s*([^\s}]+)\s*\}/g, 'position: v2($1, $2)');
      


const regex = /size:\s*\{\s*width:\s*([^\s,]+)\s*,\s*height:\s*([^\s}]+)\s*\}/g;

let newData = data.replace(regex, 'size: size($1, $2)')
.replace(/position1: { x: (\d+), y: (\d+) }/g, 'position1: v2($1, $2)')
.replace(/position2: { x: (\d+), y: (\d+) }/g, 'position2: v2($1, $2)');              

	

    // 写入新的 TypeScript 文件
    fs.writeFile(outputFile, newData, 'utf8', writeErr => {
        if (writeErr) {
            console.error('Failed to write output file:', writeErr);
        } else {
            console.log('Conversion successful! Output written to', outputFile);
        }
    });
});
