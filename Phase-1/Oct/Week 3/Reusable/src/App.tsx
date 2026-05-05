import Card from "./components/Card";
import Button from "./components/Button";
import Modal from "./components/Modal";
import { useState } from "react";

const App = () => {

  const [open, setOpen] = useState(false);
  return (
        <>
    <div className="p-10 flex gap-6 flex-wrap">
      <Card
        title="React Project"
        description="A simple reusable card component"
        image="https://images.unsplash.com/photo-1559028012-481c04fa702d"
      >
        <Button text="View More" variant="primary" />
      </Card>

      <Card
        title="UI Components"
        description="Reusable and clean design"
        image="https://images.unsplash.com/photo-1556761175-4b46a572b786"
      >
        <Button text="Explore" variant="secondary" />
      </Card>
    </div>
     <div className="p-10">
      <Button text="Open Modal" variant="primary" onClick={() => setOpen(true)} />

      <Modal isOpen={open} onClose={() => setOpen(false)} title="Delete Confirmation">
        <p className="text-gray-600 mb-4">Are you sure you want to delete this item?</p>
        <div className="flex justify-end gap-3">
          <Button text="Cancel" variant="secondary" onClick={() => setOpen(false)} />
          <Button text="Delete" variant="danger" onClick={() => setOpen(false)} />
        </div>
      </Modal>
    </div>
    </>
  );
};

export default App;
