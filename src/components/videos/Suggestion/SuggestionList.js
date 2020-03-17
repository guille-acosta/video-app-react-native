import React from 'react';
import {FlatList} from 'react-native';
import Layout from './SuggestionListLayout';
import Empty from '../../sections/Empty';
import Separator from '../../sections/VerticalSeparator';
import Suggestion from './Suggestion';

const SuggestionList = ({list}) => {
  const renderEmpty = () => <Empty text="No hay sugerencias" />;
  const itemSeparator = () => <Separator />;

  const renderItem = ({item}) => {
    return <Suggestion {...item} />;
  };

  const keyExtractor = item => item.id.toString();

  return (
    <Layout title="Recomendado para tí">
      <FlatList
        data={list}
        ItemSeparatorComponent={itemSeparator}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
        keyExtractor={keyExtractor}
      />
    </Layout>
  );
};

export default SuggestionList;