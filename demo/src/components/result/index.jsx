import React, { useState } from "react";
import IfcViewer from "./IfcViewer";

const Result = () => {
    const [ifcFile, setIfcFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setIfcFile(file);
    };

    return (
        <div className="w-full h-full p-4 flex flex-col">
            <input type="file" accept=".ifc" onChange={handleFileChange} className="mb-4 w-51 bg-blue-500 text-white p-2 rounded-lg"
            />
            <IfcViewer file={ifcFile} />
        </div>
    );
};

export default Result;