import React from "react";

const V3dBLas = () => {
  return (
    <div className="flex flex-col justify-between bg-[#0f172a] border border-blue-500 rounded-lg shadow-md p-6 h-[540px] w-full">
      <h2 className="text-white text-xl font-bold mb-2">v3dBLas: GPU-Accelerated Inference on Raspberry Pi</h2>
      <p className="text-gray-300 text-sm mb-4">
        Developed a lightweight inference framework on Raspberry Pi using <span className="text-blue-400 font-semibold">V3DLib</span> to integrate GPU for tensor computations.
        And Benchmarked custom <span className="text-blue-400 font-semibold">C-based GPU kernels</span> against equivalent CPU implementations. Demonstrated how GPU outperforms CPU on larger tensors.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {["C", "V3DLib", "Raspberry Pi", "Matplotlib"].map((tech) => (
          <span key={tech} className="bg-blue-800/50 text-blue-300 text-xs px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          src="/v3dblas_addition.png"
          alt="Addition performance comparison"
          className="rounded-lg border border-white/20"
        />
        <img
          src="/v3dblas_multiplication.png"
          alt="Multiplication performance comparison"
          className="rounded-lg border border-white/20"
        />
      </div>

      <p className="text-gray-400 text-sm mt-4 italic">
        Insight: For small tensors, GPU can be slower due to CPU↔GPU data transfer overhead.
        But for larger tensors, when parallel computation actually kicks in, the perfromance gain is significant.
      </p>
      <div className="mt-4 flex gap-4">
        <a
          href="https://github.com/pasxn/v3dBLAS"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default V3dBLas;