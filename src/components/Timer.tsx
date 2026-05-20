// src/components/Timer.tsx
import { useState, useEffect } from "react";

function Timer() {
  const [seconds,  setSeconds]  = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // isRunningが変わるたびにタイマーの開始・停止を切り替え
  useEffect(() => {
    if (!isRunning) return;  // 停止中は何もしない

    // 1秒ごとにsecondsを1増やす
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);  // 関数型更新で最新値を確実に使う
    }, 1000);

    // クリーンアップ：isRunningがfalseになったとき（または
    // コンポーネントがアンマウントされたとき）にタイマーを止める
    return () => clearInterval(timer);

  }, [isRunning]);  // isRunningが変わったときだけ実行

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  // 秒を mm:ss 形式にフォーマット
  const minutes = Math.floor(seconds / 60);
  const secs    = seconds % 60;
  const display = `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2 style={{ fontSize: "72px", fontFamily: "monospace", margin: "0 0 24px" }}>
        {display}
      </h2>
      <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
        <button onClick={() => setIsRunning(true)}  disabled={isRunning}>スタート</button>
        <button onClick={() => setIsRunning(false)} disabled={!isRunning}>ストップ</button>
        <button onClick={handleReset}>リセット</button>
      </div>
    </div>
  );
}

export default Timer;