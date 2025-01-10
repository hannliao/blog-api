const DeletePostModal = ({ onCancel, onDelete, isModalVisible }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-30  ${
        isModalVisible ? 'flex justify-center items-center' : 'hidden'
      }`}
    >
      <form
        onSubmit={onDelete}
        className="max-w-96 bg-white p-6 rounded-lg flex flex-col"
      >
        <h1 className="text-center font-semibold text-base mb-2">
          Are you sure you want to delete this post?
        </h1>
        <p className="text-sm">This action cannot be undone.</p>
        <div className="flex justify-end mt-4">
          <button
            type="button"
            onClick={onCancel}
            className="bg-stone-200 hover:bg-stone-300 rounded-lg p-2 mr-2 text-sm font-semibold"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-500 rounded-lg p-2 text-white text-sm font-semibold"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeletePostModal;
