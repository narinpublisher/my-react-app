// 📁 src/components/EslintTest.tsx

function EslintTest() {
  // 未使用変数（error）
  const unusedValue = 123;

  // console.log（warn）
  console.log("ESLint Test");

  const message = "Hello ESLint";

  return (
    <div style={{ padding: "20px" }}>
      <h2>ESLint Test Component</h2>

      <p>{message}</p>
    </div>
  );
}

export default EslintTest;