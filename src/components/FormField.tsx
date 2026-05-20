type Props = {
  label: string;
  error?: string;
};

function FormField({
  label,
  error,
}: Props) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <label
        style={{
          display: "block",
          marginBottom: "6px",
        }}
      >
        {label}
      </label>

      <input
        type="text"
        style={{
          width: "300px",
          padding: "8px",
        }}
      />

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default FormField;