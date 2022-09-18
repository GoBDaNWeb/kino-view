// * react/next
import React from 'react';

//  * redux
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'store/store';
import { setPage } from 'store/slices/paginationSlice';

// * icons
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

// * styles
import styles from './Pagination.module.scss';
import { IPaginationProps } from './types';

const Pagination: React.FC<IPaginationProps> = ({ totalPages }) => {
    const dispatch = useDispatch();
    const { page } = useTypedSelector((state) => state.paginate);

    const userChangePage = (selectedPage: number) => {
        dispatch(setPage(selectedPage));
    };

    if (!totalPages) {
        return <div>Loading</div>;
    }
    return (
        <div className={styles.pagination}>
            <button
                onClick={() => userChangePage(page - 1)}
                className={styles.icon}
                disabled={page === 1}
            >
                <MdNavigateBefore />
            </button>

            <ul className={styles.pages}>
                {page > 1 && (
                    <>
                        {page !== 1 && page > 4 && (
                            <li>
                                <button onClick={() => userChangePage(1)}>
                                    1
                                </button>
                            </li>
                        )}
                        {page > 5 && <li>...</li>}
                        {page === totalPages ? (
                            <li>
                                <button
                                    onClick={() => userChangePage(page - 6)}
                                >
                                    {page - 6}
                                </button>
                            </li>
                        ) : null}

                        {page === totalPages || page === totalPages - 1 ? (
                            <li>
                                <button
                                    onClick={() => userChangePage(page - 5)}
                                >
                                    {page - 5}
                                </button>
                            </li>
                        ) : null}
                        {page === totalPages ||
                        page === totalPages - 1 ||
                        page === totalPages - 2 ? (
                            <li>
                                <button
                                    onClick={() => userChangePage(page - 4)}
                                >
                                    {page - 4}
                                </button>
                            </li>
                        ) : null}
                        {page !== 2 && page !== 3 && page <= 5 ? (
                            <li>
                                <button
                                    onClick={() => userChangePage(page - 3)}
                                >
                                    {page - 3}
                                </button>
                            </li>
                        ) : (
                            <>
                                {page === totalPages - 1 ||
                                page === totalPages - 2 ||
                                page === totalPages - 3 ||
                                page === totalPages ? (
                                    <li>
                                        <button
                                            onClick={() =>
                                                userChangePage(page - 3)
                                            }
                                        >
                                            {page - 3}
                                        </button>
                                    </li>
                                ) : null}
                            </>
                        )}
                        {page !== 2 ? (
                            <li>
                                <button
                                    onClick={() => userChangePage(page - 2)}
                                >
                                    {page - 2}
                                </button>
                            </li>
                        ) : null}

                        <li>
                            <button onClick={() => userChangePage(page - 1)}>
                                {page - 1}
                            </button>
                        </li>
                    </>
                )}

                <li>
                    <button className={styles.current}>{page}</button>
                </li>

                <>
                    {page <= 5 || page !== totalPages ? (
                        <li>
                            <button onClick={() => userChangePage(page + 1)}>
                                {page + 1}
                            </button>
                        </li>
                    ) : null}

                    {(page !== totalPages && page !== totalPages - 1) ||
                    page === totalPages - 2 ? (
                        <li>
                            <button onClick={() => userChangePage(page + 2)}>
                                {page + 2}
                            </button>
                        </li>
                    ) : null}

                    {page !== totalPages && (
                        <>
                            {(page !== 5 && page < 6) ||
                            page === totalPages - 3 ||
                            page === totalPages - 4 ? (
                                <li>
                                    <button
                                        onClick={() => userChangePage(page + 3)}
                                    >
                                        {page + 3}
                                    </button>
                                </li>
                            ) : null}
                        </>
                    )}

                    {page !== totalPages && (
                        <>
                            {page <= 3 && (
                                <li>
                                    <button
                                        onClick={() => userChangePage(page + 4)}
                                    >
                                        {page + 4}
                                    </button>
                                </li>
                            )}
                        </>
                    )}
                    {page !== totalPages && (
                        <>
                            {page <= 2 && (
                                <li>
                                    <button
                                        onClick={() => userChangePage(page + 5)}
                                    >
                                        {page + 5}
                                    </button>
                                </li>
                            )}
                        </>
                    )}
                    {page !== totalPages && (
                        <>
                            {page === 1 && (
                                <li>
                                    <button
                                        onClick={() => userChangePage(page + 6)}
                                    >
                                        {page + 6}
                                    </button>
                                </li>
                            )}
                        </>
                    )}
                    {page !== totalPages &&
                        page !== totalPages - 1 &&
                        page !== totalPages - 2 &&
                        page !== totalPages - 3 &&
                        page !== totalPages - 4 && <li>...</li>}
                </>

                {page !== totalPages &&
                    page !== totalPages - 1 &&
                    page !== totalPages - 2 &&
                    page !== totalPages - 3 && (
                        <li>
                            <button onClick={() => userChangePage(totalPages)}>
                                {totalPages}
                            </button>
                        </li>
                    )}
            </ul>
            <button
                onClick={() => userChangePage(page + 1)}
                className={styles.icon}
                disabled={page === totalPages}
            >
                <MdNavigateNext />
            </button>
        </div>
    );
};

export default Pagination;
