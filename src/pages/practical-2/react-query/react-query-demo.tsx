import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Spacing } from '../../../common/theme';
import styles from './react-query-demo.style';
import type { Post } from './react-query-demo.type';

const ACCENT = '#FF4154';
const queryClient = new QueryClient();

const fetchPosts = async (): Promise<Post[]> => {
  const { data } = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts?_limit=8',
  );
  return data;
};

// ─── Inner Component ──────────────────────────────────────────────────────────
const PostList: React.FC = () => {
  const { data, isLoading, isError, refetch, isFetching } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  const renderItem = ({ item }: { item: Post }) => (
    <View style={styles.postCard}>
      <Text style={styles.postId}>#{item.id}</Text>
      <Text style={styles.postTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.conceptBox}>
        <Text style={styles.conceptTitle}>How React Query Works</Text>
        <Text style={styles.conceptText}>
          1. <Text style={styles.bold}>QueryClientProvider</Text> — wraps the
          app{'\n'}
          2. <Text style={styles.bold}>useQuery</Text> — fetches, caches, syncs
          data{'\n'}
          3. <Text style={styles.bold}>queryKey</Text> — unique cache identifier
          {'\n'}
          4. Auto-refetch, stale-while-revalidate built-in{'\n'}
          5. <Text style={styles.bold}>isLoading/isError</Text> — built-in
          states
        </Text>
      </View>

      <View style={styles.statusRow}>
        <Text style={styles.statusLabel}>
          Status:{' '}
          {isLoading
            ? '⏳ Loading'
            : isError
            ? '❌ Error'
            : `✅ ${data?.length} posts`}
        </Text>
        <TouchableOpacity onPress={() => refetch()} style={styles.refetchBtn}>
          <Text style={styles.refetchText}>
            {isFetching ? '…' : '↺ Refetch'}
          </Text>
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <ActivityIndicator
          color={ACCENT}
          size="large"
          style={{ marginTop: Spacing.xl }}
        />
      ) : isError ? (
        <Text style={styles.errorText}>Failed to load. Check connection.</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      )}

      <View style={styles.codeBox}>
        <Text style={styles.codeTitle}>Key Code</Text>
        <Text style={styles.code}>
          {`const { data, isLoading } = useQuery({\n  queryKey: ['posts'],\n  queryFn: () => axios.get('/posts')\n})`}
        </Text>
      </View>
    </View>
  );
};

// ─── Wrapper ──────────────────────────────────────────────────────────────────
const ReactQueryDemoScreen: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <PostList />
  </QueryClientProvider>
);

export default ReactQueryDemoScreen;
