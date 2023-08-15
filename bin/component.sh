#!/bin/bash

# Check if the script is being run from the root directory
if [ ! -f "package.json" ]; then
    echo "Please run the script from the root directory."
    exit 1
fi

# Check if the component name is provided
if [ $# -eq 0 ]; then
    echo "Please provide the component name."
    exit 1
fi

# Check if the component name is valid
if [[ ! $1 =~ ^[A-Z][a-zA-Z]*$ ]]; then
    echo "Invalid component name."
    exit 1
fi

# Check if the component already exists
if [ -d "src/components/$1" ]; then
    echo "Component already exists."
    exit 1
fi

# Create the component
mkdir src/components/$1
touch src/components/$1/$1.jsx
touch src/components/$1/$1.module.scss
touch src/components/$1/$1.test.jsx
touch src/components/$1/index.js

echo "export { $1 } from \"./$1\";" >> src/components/$1/index.js

echo ".container {
  /* Adicione aqui o estilo do componente */
}" >> src/components/$1/$1.module.scss

echo "import styles from \"./$1.module.scss\";

export const $1 = () => {
    return (
        <div className={styles.container}>
            Componente $1
        </div>
    );
};" >> src/components/$1/$1.jsx

echo "import { $1 } from \"./$1\"
import { render, screen } from \"@testing-library/react\"

describe(\"$1\", () => {
    it(\"should render the component\", () => {
        render(<$1 />)
        expect(screen.getByText(\"Componente $1\")).toBeInTheDocument()
    })
})" >> src/components/$1/$1.test.jsx

echo "export * from \"./$1\";" >> src/components/index.js

if [ ! -d ".git" ]; then
    git init
    git add .
    git commit -m "chore: initial commit"
fi

git add src/components/$1/$1.jsx
git add src/components/$1/$1.test.jsx
git add src/components/$1/$1.module.scss
git add src/components/$1/index.js
git add src/components/index.js

# Commit the changes
git commit -m "feat: added $1 component"

# Exit the script
exit 0