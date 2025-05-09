import React, { useState, useEffect } from 'react';

interface Module {
    id: string;
    name: string;
}

const ModuleSelection: React.FC = () => {
    const [modules, setModules] = useState<Module[]>([]);
    const [selectedModule, setSelectedModule] = useState('');

    useEffect(() => {
        const fetchModules = async () => {
            const response = await fetch('/api/modules');
            const data: Module[] = await response.json();
            setModules(data);
        };

        fetchModules();
    }, []);

    const handleModuleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedModule(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Selected Module:', selectedModule);
    };

    return (
        <div className="module-selection">
            <h2>Select Your Modules</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="modules">Choose a module:</label>
                <select id="modules" value={selectedModule} onChange={handleModuleSelect}>
                    <option value="">--Please choose an option--</option>
                    {modules.map((module) => (
                        <option key={module.id} value={module.name}>
                            {module.name}
                        </option>
                    ))}
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ModuleSelection;