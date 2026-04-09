const Skeleton = ({ type }) => {
    if (type === 'card') {
        return (
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-4 h-100">
                <div className="skeleton" style={{ height: '220px' }}></div>
                <div className="card-body p-4">
                    <div className="skeleton rounded mb-2" style={{ height: '20px', width: '60%' }}></div>
                    <div className="skeleton rounded mb-3" style={{ height: '30px', width: '90%' }}></div>
                    <div className="d-flex justify-content-between">
                        <div className="skeleton rounded" style={{ height: '30px', width: '40%' }}></div>
                        <div className="skeleton rounded" style={{ height: '30px', width: '30%' }}></div>
                    </div>
                </div>
            </div>
        );
    }

    return <div className="skeleton rounded mb-3" style={{ height: '20px' }}></div>;
};

export default Skeleton;
