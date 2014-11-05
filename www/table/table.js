/**
 * Created by onysko on 03.11.2014.
 */

function initRelatedTable(table) {
    s('.delete_material', table).each(function(link) {
        link.ajaxClick(function(response) {
            s('#related-tab-tab').html(response.table);
            s('#material-tabs').tabs();
            s('.related_material_table', response.table).each(function(table) {
                initRelatedTable(table);
            });
            SamsonCMS_InputField(s('.__inputfield.__textarea'));
            initAddButton();
        })
    });
}

s(document).pageInit(function(table) {
    s('.related_material_table').each(function(table) {
        initRelatedTable(table);
    });
    initAddButton();

});

function initAddButton()
{
    s('.related_material_add').each(function(link) {
        link.tinyboxAjax({
            html : 'popup',
            oneClickClose : true,
            renderedHandler : function(form, tb) {
                s('.add_related_form', form).ajaxSubmit(function(response) {
                    s('#related-tab-tab').html(response.table);
                    s('#material-tabs').tabs();
                    s('.related_material_table', response.table).each(function(table) {
                        initRelatedTable(table);
                    });
                    SamsonCMS_InputField(s('.__inputfield.__textarea'));
                    initAddButton();
                    tb._close();
                });
            }
        });
    });
}