import React from 'react';

const MenuItem = ({ name, preparationTime, parentName, location, foodType }) => {
    return (
        <div className="w-full h-full overflow-auto shadow bg-white" id="journal-scroll">
            <table className="w-full">
                <tbody>
                    <tr className="relative transform scale-100 text-xm py-1 border-b-2 border-blue-100 cursor-pointer hover:bg-blue-500 hover:bg-opacity-25">
                        <td className="pl-5 whitespace-no-wrap">
                            <div className="text-gray-400">Duration</div>
                            <div>{ preparationTime } mins</div>
                        </td>

                        <td className="px-2 py-2 whitespace-no-wrap">
                            <div className="leading-5 text-gray-500 font-medium">{ location }</div>
                            <div className="leading-5 text-gray-900">{ name }
                                <a className="text-blue-500 hover:underline" href="#">@{ parentName }</a></div>
                            <div className="leading-5 text-gray-800">{ foodType }</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MenuItem;
