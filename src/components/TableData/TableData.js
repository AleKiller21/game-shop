import React from 'react';
import PropTypes from 'prop-types';

function TableData(props) {
    return (
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary">
                        <h4 class="card-title ">{props.tableTitle}</h4>
                        <p class="card-category">{props.tableSubTitle}</p>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead class=" text-primary">
                                    {props.headers.map(title => <th>{title}</th>)}
                                </thead>
                                <tbody>
                                    {props.data.map(value => {
                                        return (
                                            <tr>
                                                <td>
                                                    {value.order_number}
                                                </td>
                                                <td>
                                                    {value.gamertag}
                                                </td>
                                                <td>
                                                    {value.game_name}
                                                </td>
                                                <td>
                                                    {value.total}
                                                </td>
                                                <td class="text-primary">
                                                    {value.status}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

TableData.propTypes = {
    headers: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    tableTitle: PropTypes.string.isRequired,
    tableSubTitle: PropTypes.string.isRequired
};

export default TableData;
