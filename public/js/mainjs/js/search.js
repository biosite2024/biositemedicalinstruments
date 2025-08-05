$(document).ready(function () {
  // Initialize each department table
  $('table.table').each(function (index) {
    const table = $(this);
    const tableId = table.attr('id') || 'table-' + index;

    // Apply default index
    default_index(table);

    // Attach pagination per table
    getPagination(table);

    // Attach independent search handler
    table.closest('.partners-section').find('input[type="text"]').on('keyup', function () {
      FilterkeyWord_all_table(table, $(this));
    });
  });
});

// ✅ Apply continuous numbering per table
function default_index(table) {
  let id = 1;
  table.find('tbody tr').each(function () {
    $(this).find('td:first').text(id++);
  });
}

// ✅ Handle pagination
function getPagination(table) {
  const wrapper = table.closest('.partners-section');
  const maxRowsSelect = wrapper.find('select');
  const pagination = wrapper.find('.pagination');
  const rowsCount = wrapper.find('.rows_count');

  maxRowsSelect.on('change', function () {
    pagination.html('');
    const maxRows = parseInt($(this).val());
    const tr = table.find('tbody tr');
    const totalRows = tr.length;

    tr.hide();
    tr.slice(0, maxRows).show();

    if (totalRows > maxRows) {
      const pageCount = Math.ceil(totalRows / maxRows);
      for (let i = 1; i <= pageCount; i++) {
        pagination.append(`<li data-page="${i}"><span>${i}</span></li>`);
      }

      pagination.find('li:first').addClass('active');

      pagination.find('li').on('click', function (e) {
        e.preventDefault();
        const pageNum = $(this).attr('data-page');
        const start = (pageNum - 1) * maxRows;
        const end = start + maxRows;

        tr.hide().slice(start, end).show();
        pagination.find('li').removeClass('active');
        $(this).addClass('active');

        showig_rows_count(rowsCount, maxRows, pageNum, totalRows);
      });

      showig_rows_count(rowsCount, maxRows, 1, totalRows);
    } else {
      rowsCount.text('');
    }
  }).trigger('change');
}

// ✅ Update rows count text
function showig_rows_count(target, maxRows, pageNum, totalRows) {
  const start = (pageNum - 1) * maxRows + 1;
  const end = Math.min(pageNum * maxRows, totalRows);
  target.text(`Showing ${start} to ${end} of ${totalRows} entries`);
}

// ✅ Per table filter
function FilterkeyWord_all_table(table, input) {
  const keyword = input.val().toLowerCase();
  const rows = table.find('tbody tr');
  let count = 0;

  rows.each(function () {
    const row = $(this);
    const match = row.text().toLowerCase().includes(keyword);
    row.toggle(match);
    if (match) count++;
  });

  // Hide pagination & update count
  const wrapper = table.closest('.partners-section');
  wrapper.find('.pagination').hide();
  wrapper.find('.rows_count').text(`Showing ${count} matching entries`);
}


function FilterkeyWord_all_table(table, input) {
  const keyword = input.val().toLowerCase();
  const rows = table.find('tbody tr');
  let filteredRows = [];

  rows.each(function () {
    const row = $(this);
    const match = row.text().toLowerCase().includes(keyword);
    row.toggle(match);
    if (match) filteredRows.push(row);
  });

  const wrapper = table.closest('.partners-section');
  const pagination = wrapper.find('.pagination');
  const rowsCount = wrapper.find('.rows_count');
  const maxRows = parseInt(wrapper.find('select').val()) || 10;

  // Reset pagination
  pagination.html('');
  const totalFiltered = filteredRows.length;

  if (totalFiltered > maxRows) {
    const pageCount = Math.ceil(totalFiltered / maxRows);
    for (let i = 1; i <= pageCount; i++) {
      pagination.append(`<li data-page="${i}"><span>${i}</span></li>`);
    }

    pagination.find('li:first').addClass('active');

    pagination.find('li').on('click', function (e) {
      e.preventDefault();
      const pageNum = $(this).attr('data-page');
      const start = (pageNum - 1) * maxRows;
      const end = start + maxRows;

      rows.hide();
      $(filteredRows).hide().slice(start, end).show();

      pagination.find('li').removeClass('active');
      $(this).addClass('active');

      showig_rows_count(rowsCount, maxRows, pageNum, totalFiltered);
    });

    // Show first page of filtered results
    $(filteredRows).hide().slice(0, maxRows).show();
    showig_rows_count(rowsCount, maxRows, 1, totalFiltered);
  } else {
    $(filteredRows).show();
    pagination.hide();
    rowsCount.text(`Showing ${totalFiltered} matching entries`);
  }
}
function showig_rows_count(target, maxRows, pageNum, totalRows) {
  if (totalRows === 0) {
    target.text('No matching entries found');
    return;
  }

  const start = (pageNum - 1) * maxRows + 1;
  const end = Math.min(pageNum * maxRows, totalRows);
  target.text(`Showing ${start} to ${end} of ${totalRows} entries`);
}



$(document).ready(function () {
  $('table.table').each(function () {
    const table = $(this);
    const areaIndex = table.find('thead th').length - 1;
    const areaTh = table.find('thead th').eq(areaIndex);

    // Add triangle icon
    areaTh.addClass('area-filter-toggle');

    // Gather area options
    const areaValues = new Set();
    table.find('tbody tr').each(function () {
      const val = $(this).find('td').eq(areaIndex).text().trim();
      if (val) areaValues.add(val);
    });

    // Build dropdown
    const dropdown = $('<div class="area-inline-filter"><select><option value="">All</option></select></div>');
    Array.from(areaValues).sort().forEach(area => {
      dropdown.find('select').append(`<option value="${area}">${area}</option>`);
    });
    $('body').append(dropdown);

    // Show dropdown when header clicked
    areaTh.on('click', function (e) {
      const offset = $(this).offset();
      dropdown.css({
        top: offset.top + $(this).outerHeight(),
        left: offset.left
      }).toggle();
      e.stopPropagation();
    });

    // Filter logic
    dropdown.find('select').on('change', function () {
      const val = $(this).val().toLowerCase();
      table.find('tbody tr').each(function () {
        const cellVal = $(this).find('td').eq(areaIndex).text().toLowerCase();
        $(this).toggle(!val || cellVal === val);
      });
      default_index(table); // re-number
      dropdown.hide();
    });

    // Hide on outside click
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.area-inline-filter').length) {
        dropdown.hide();
      }
    });
  });
});
